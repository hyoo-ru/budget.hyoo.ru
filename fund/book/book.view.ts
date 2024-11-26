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

		@ $mol_mem_key
		category_ballance( id: string ) {
			return this.category( id ).ballance()
		}

		@ $mol_mem_key
		category_portion( id: string ) {
			return Math.abs( this.category_ballance( id ) ) / this.fund().volatility()
		}

		@ $mol_mem_key
		category_mood( id: string ) {
			return this.category_ballance( id ) >= 0 ? 'positive' : 'negative'
		}

		ballance() {
			return super.ballance().replace( '{value}', this.fund().ballance().toLocaleString() )
		}

		@ $mol_mem
		export_blob() {
			
			const data = this.fund().category_list().flatMap(
				category => category.transfer_list().map( transfer => ({
					id: transfer.ref().description!,
					category: category.title(),
					amount: transfer.amount(),
					description: transfer.description(),
					moment: transfer.moment(),
				}) )
			)

			const csv = this.$.$mol_csv_serial( data, '\t' )
			return new $mol_blob([ csv ])

		}

		@ $mol_mem
		access() {
			return this.$.$mol_state_arg.value( 'access' ) !== null
		}

		@ $mol_mem_key
		override menu_link_arg( id: string ) {
			return {
				... super.menu_link_arg( id ),
				access: null,
			}
		}

		pages() {
			return [
				... super.pages(),
				... this.access() ? [ this.Access_page() ] : [],
			]
		}
		
	}
}
