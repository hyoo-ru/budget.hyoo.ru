namespace $.$$ {
	
	$mol_style_define( $hyoo_budget_fund_book, {
		
		Menu_tools: {
			flex: {
				grow: 0,
			},
		},

		Menu_title: {
			flex: {
				basis: `10rem`,
			},
		},
		
		Menu: {
			flex: {
				basis: `25rem`,
			},
		},

		Menu_link: {
			gap: $mol_gap.block,
		},
		
		Menu_link_title: {
			flex: {
				grow: 1,
			},
		},
		
		Category_portion: {
			flex: {
				grow: 0,
				shrink: 0,
				basis: `5rem`,
			},
			'[hyoo_budget_fund_book_category_mood]': {
				negative: {
					$mol_portion_indicator: {
						background: {
							color: $mol_theme.special,
						},
					},
				},
			},
		},
		
	} )
	
}
