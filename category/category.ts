namespace $ {

	export class $hyoo_budget_category extends $hyoo_crus_entity.with({
		Limit: $hyoo_crus_atom_real,
		Transfer: $hyoo_crus_list_ref_to( ()=> $hyoo_budget_transfer ),
	}) {

		limit( next?: number ) {
			return this.Limit( next )?.val( next ) ?? null
		}
		
		@ $mol_mem
		transfer_list() {
			return this.Transfer()?.remote_list() ?? []
		}

		@ $mol_action
		transfer_make() {
			const transfer = this.Transfer( null )!.make( null )
			transfer.moment( new( $mol_wire_sync( $mol_time_moment ) ) )
			return transfer
		}
		
		transfer_visible( transfer: $hyoo_budget_transfer, next?: boolean ) {
			return this.Transfer( next )?.has( transfer.ref(), next ) ?? false
		}

		@ $mol_mem
		ballance() {
			return this.transfer_list()
				.reduce( ( ballance, transfer )=> ballance + ( transfer.amount() || 0 ), 0 )
		}

	}
	
}
