namespace $.$$ {
	$mol_test({
		
		async "Fund making and hiding"( $ ) {

			const app = $hyoo_budget_app.make({ $ })
			$mol_assert_equal( app.menu_links().length, 0 )

			await $mol_wire_async( app.Fund_make() ).click( new $mol_dom_context.MouseEvent( 'click' ) )
			$mol_assert_equal( app.menu_links().length, 1 )
			
			const fund = app.person().fund_list()[0]

			$mol_assert_equal( fund.title(), '' )
			$mol_assert_equal( fund.category_list(), [] )
			$mol_assert_equal( fund.ballance(), 0 )
			$mol_assert_equal( fund.volatility(), 0 )

			$mol_assert_equal( fund.can_change(), true )
			$mol_assert_equal( fund.land().lord_rank( $hyoo_crus_ref('') ), $hyoo_crus_rank.nil )
			
			const spread = app.Spread( fund.ref().description )
			$mol_assert_equal( app.pages(), [ app.Menu(), spread.Menu() ] )
			
			$mol_assert_equal( spread.Visible().checked(), true )
			spread.Visible().checked( false )
			$mol_assert_equal( app.menu_links().length, 0 )

		},
		
	})
}
