namespace $.$$ {
	export class $hyoo_budget_category_page extends $.$hyoo_budget_category_page {
		
		title() {
			return super.title() || `Category ${ $hyoo_crus_ref_head( this.category().ref() ) }`
		}
		
		category_title( next?: string ) {
			return this.category().title( next )
		}

		limit( next?: number ) {
			return this.category().limit( next )
		}
		
		@ $mol_mem
		transfer_list() {
			return this.category().transfer_list().map( transfer => this.Transfer_row( transfer.ref().description! ) ).reverse()
		}

		@ $mol_mem_key
		transfer( id: string ) {
			return this.$.$hyoo_crus_glob.Node( $hyoo_crus_ref( id ), $hyoo_budget_transfer )
		}

		delete( id: string ) {
			this.category().transfer_visible( this.transfer( id ), false )
		}
		
		transfer_make() {
			const category = this.category().transfer_make()
			this.$.$mol_wait_rest()
			this.transfer_list()[0].Amount().focused( true )
		}

		ballance() {
			return super.ballance().replace( '{value}', this.category().ballance().toLocaleString() )
		}
		
	}
}
