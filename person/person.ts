namespace $ {
	
	export class $hyoo_budget_person extends $hyoo_crus_home.with({
		Fund: $hyoo_crus_list_ref_to( ()=> $hyoo_budget_fund ),
	}) {

		@ $mol_mem
		fund_list() {
			return this.Fund()?.remote_list() ?? []
		}
		
		@ $mol_action
		fund_make() {
			return this.Fund( null )!.make({})
		}

		fund_visible( budget: $hyoo_budget_fund, next?: boolean ) {
			return this.Fund( next )?.has( budget.ref(), next ) ?? false
		}

	}

}
