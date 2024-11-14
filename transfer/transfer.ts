namespace $ {
	
	export class $hyoo_budget_transfer extends $hyoo_crus_dict.with({
		Amount: $hyoo_crus_atom_real,
		Description: $hyoo_crus_atom_str,
	}) {
		
		amount( next?: number ) {
			return this.Amount( next )?.val( next ) ?? 0
		}

		description( next?: string ) {
			return this.Description( next )?.val( next ) ?? ''
		}

	}

}
