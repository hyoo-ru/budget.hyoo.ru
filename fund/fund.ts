namespace $ {
	
	export class $hyoo_budget_fund extends $hyoo_crus_entity.with({
		Limit: $hyoo_crus_atom_real,
		Category: $hyoo_crus_list_ref_to( ()=> $hyoo_budget_category ),
	}) {
		
		limit( next?: number ) {
			return this.Limit( next )?.val( next ) ?? null
		}
		
		@ $mol_mem
		category_list() {
			return this.Category()?.remote_list() ?? []
		}

		category_make() {
			return this.Category( null )!.make( null )
		}
		
		category_visible( category: $hyoo_budget_category, next?: boolean ) {
			return this.Category( next )?.has( category.ref(), next ) ?? false
		}

		@ $mol_mem
		ballance() {
			return this.category_list()
				.reduce( ( ballance, category )=> ballance + category.ballance(), 0 )
		}

		@ $mol_mem
		volatility() {
			return this.category_list()
				.reduce( ( ballance, category )=> Math.max( ballance, Math.abs( category.ballance() ) ), 0 )
		}

	}

}
