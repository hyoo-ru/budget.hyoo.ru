namespace $.$$ {
	export class $hyoo_budget_fund_book extends $.$hyoo_budget_fund_book {
		
		menu_title() {
			return super.menu_title() || `Fund ${ $hyoo_crus_ref_peer( this.fund().ref() ) }`
		}

		fund_title( next?: string ) {
			return this.fund().title( next )
		}
		
		limit( next?: number ) {
			return this.fund().limit( next )
		}

		@ $mol_mem
		spread_ids() {
			return this.fund().category_list().map( category => category.ref().description! ).reverse()
		}

		category_make() {
			const category = this.fund().category_make()
			this.$.$mol_state_arg.go({ category: category.ref().description! })
			this.$.$mol_wait_timeout( 700 )
			this.Category_page( category.ref().description! ).Title().focused( true )
		}

		@ $mol_mem_key
		category( id: string ) {
			return this.$.$hyoo_crus_glob.Node( $hyoo_crus_ref( id ), $hyoo_budget_category )
		}
		
		@ $mol_mem_key
		category_visible( id: string, next?: boolean ) {
			return this.fund().category_visible( this.category( id ), next )
		}

		ballance() {
			return super.ballance().replace( '{value}', this.fund().ballance().toLocaleString() )
		}
		
	}
}
