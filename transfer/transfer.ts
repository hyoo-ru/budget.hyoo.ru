namespace $ {
	
	export class $hyoo_budget_transfer extends $giper_baza_flex_subj.with({
		Amount: $giper_baza_atom_real,
		Description: $giper_baza_atom_text,
		Moment: $giper_baza_atom_time,
	}) {
		
		amount( next?: number ) {
			return this.Amount( next )?.val( next ) ?? Number.NaN
		}

		description( next?: string ) {
			return this.Description( next )?.val( next ) ?? ''
		}

		moment( next?: $mol_time_moment | null ) {
			return this.Moment( next )?.val( next )?.mask( '0000-00-00' ) ?? null!
		}

	}

}
