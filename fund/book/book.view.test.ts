namespace $ {
	
	$mol_test({
		
		'Category making and hiding'( $ ) {
			
			const land = $hyoo_crus_land.make({ $ })
			const fund = land.Data( $hyoo_budget_fund )
			const book = $hyoo_budget_fund_book.make({ $, fund: ()=> fund })
			$mol_assert_equal( book.menu_links().length, 0 )
			
			book.Category_make().click( new MouseEvent( 'click' ) )
			$mol_assert_equal( book.menu_links().length, 1 )
			
			const category = fund.category_list()[0]

			$mol_assert_equal( category.title(), '' )
			$mol_assert_equal( category.transfer_list(), [] )
			$mol_assert_equal( category.ballance(), 0 )

			$mol_assert_equal( land.ref(), fund.land().ref(), category.land().ref() )

			const spread = book.Spread( category.ref().description )
			$mol_assert_equal( book.pages(), [ book.Menu(), spread ] )
			
			$mol_assert_equal( spread.Visible().checked(), true )
			spread.Visible().checked( false )
			$mol_assert_equal( book.menu_links().length, 0 )

		},

	})

}
