namespace $ {
	
	$mol_test({
		
		'Category making and hiding'( $ ) {
			
			const land = $.$giper_baza_glob.home().land()
			const fund = land.Data( $hyoo_budget_fund )
			const book = $hyoo_budget_fund_book.make({ $, fund: ()=> fund })
			$mol_assert_equal( book.menu_links().length, 0 )
			
			book.Category_make().click( new $mol_dom_context.MouseEvent( 'click' ) )
			$mol_assert_equal( book.menu_links().length, 1 )
			
			const category = fund.category_list()[0]

			$mol_assert_equal( category.name(), '' )
			$mol_assert_equal( category.transfer_list(), [] )
			$mol_assert_equal( category.ballance(), 0 )

			$mol_assert_equal( land.link(), fund.land().link(), category.land().link() )

			const spread = book.Spread( category.link().str )
			$mol_assert_equal( book.pages(), [ book.Menu(), spread ] )
			
			$mol_assert_equal( spread.Visible().checked(), true )
			spread.Visible().checked( false )
			$mol_assert_equal( book.menu_links().length, 0 )

		},

	})

}
