namespace $.$$ {
	export class $hyoo_budget_app extends $.$hyoo_budget_app {

		@ $mol_mem
		person() {
			return this.$.$hyoo_crus_glob.home( $hyoo_budget_person )
		}
		
		@ $mol_mem
		person_id() {
			return this.person().ref().description!
		}
		
		@ $mol_mem
		spread_ids() {
			return this.person().fund_list().map( budget => budget.ref().description! ).reverse()
		}

		fund_make() {
			const fund = this.person().fund_make()
			this.$.$mol_state_arg.go({ fund: fund.ref().description! })
			this.$.$mol_wait_timeout( 700 )
			this.Fund_page( fund.ref().description! ).Menu_title().focused( true )
		}

		@ $mol_mem_key
		fund( id: string ) {
			return this.$.$hyoo_crus_glob.Node( $hyoo_crus_ref( id ), $hyoo_budget_fund )
		}
		
		@ $mol_mem_key
		fund_visible( id: string, next?: boolean ) {
			return this.person().fund_visible( this.fund( id ), next )
		}

		lang( next?: string ) {
			return this.$.$mol_locale.lang( next )
		}

		@ $mol_mem_key
		override menu_link_arg( id: string ) {
			return {
				... super.menu_link_arg( id ),
				profile: null,
			}
		}

		@ $mol_mem
		profile() {
			
			const id = this.$.$mol_state_arg.value( 'profile' )
			if( !id ) return null!

			const ref = $hyoo_crus_ref( id )
			return this.$.$hyoo_crus_glob.Node( ref, $hyoo_budget_person )

		}

		pages() {
			return [
				... super.pages(),
				... this.profile() ? [ this.Profile_page( this.profile() ) ] : [],
			]
		}
		
	}
}
