namespace $.$$ {
	export class $hyoo_budget_category_page extends $.$hyoo_budget_category_page {
		
		title() {
			return super.title() || `Category ${ this.category().link().head().str }`
		}
		
		category_name( next?: string ) {
			return this.category().name( next )
		}

		limit( next?: number ) {
			return this.category().limit( next )
		}
		
		@ $mol_mem
		transfer_list() {
			return this.category().transfer_list().map( transfer => this.Transfer_row( transfer.link().str ) ).reverse()
		}

		@ $mol_mem_key
		transfer( id: string ) {
			return this.$.$giper_baza_glob.Pawn( new $giper_baza_link( id ), $hyoo_budget_transfer )
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
