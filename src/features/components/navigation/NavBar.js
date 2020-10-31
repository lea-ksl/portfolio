import React from "react";
import { connect } from 'react-redux'
import { IntlActions, useTranslate } from 'react-redux-multilingual'
import { Anchor, Nav, Box, Button } from 'grommet'

const NavBar = ({dispatch}) => {
  const translate = useTranslate()
    return (
        <Box width="100%" align="center" justify="center" direction="row-responsive" wrap="true" background={{"dark":false}} gap="medium">
          <Box align="center" justify="space-evenly" direction="row-responsive" wrap="true" background={{"dark":false}} gap="medium"></Box>
            <Nav direction="row" pad="small" justify="center">
                <Anchor color="grey" href="/" label={translate('heading.home')} />
                <Anchor color="grey" href="/presentation" label={translate("heading.prez")} />
                <Anchor color="grey" href="/cv" label={translate("heading.experiences")} />
            </Nav>
            <Box align="center" justify="space-evenly" direction="row-responsive" wrap="true" background={{"dark":false}} gap="medium">
                    <Button disabled={false} hoverIndicator color="light-2"  active={false} plain={false} primary reverse={true} secondary={false}
                        onClick={() => {
                            dispatch(IntlActions.setLocale('en'))
                        }}>English
                    </Button>
                    <Button disabled={false} hoverIndicator color="dark-2" active={false} plain={false} primary reverse={false} secondary={false}
                        onClick={() => {
                            dispatch(IntlActions.setLocale('fr'))
                        }}>Français
                    </Button>
                </Box>
        </Box>
    )
}

export default connect()(NavBar)