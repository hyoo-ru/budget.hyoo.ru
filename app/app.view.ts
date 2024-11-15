namespace $.$$ {
	export class $hyoo_budget_app extends $.$hyoo_budget_app {

		@ $mol_mem
		person() {
			return this.$.$hyoo_crus_glob.home( $hyoo_budget_person )
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
		
	}
}
