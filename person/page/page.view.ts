namespace $.$$ {
	export class $hyoo_budget_person_page extends $.$hyoo_budget_person_page {
		
		override id() {
			return this.person().ref().description!
		}
		
		override key() {
			return this.person().land().key()?.toString() ?? ''
		}
		
	}
}
