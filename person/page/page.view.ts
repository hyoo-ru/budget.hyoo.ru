namespace $.$$ {
	export class $hyoo_budget_person_page extends $.$hyoo_budget_person_page {
		
		override id() {
			return this.person().link().str
		}
		
		override key() {
			return this.person().land().auth().pass().toString()
		}
		
	}
}
