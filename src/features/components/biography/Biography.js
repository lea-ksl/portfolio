import React from "react";
import { connect } from 'react-redux'
import { useTranslate } from 'react-redux-multilingual'
import { Box, Heading, List } from 'grommet'



const Biography = () => {
    const translate = useTranslate()
    return (
        <Box pad="medium" align="center" fil="horizontal" gap="medium" background={{"color":"dark-1","position":"bottom"}} round="small" elevation="medium" margin="small" direction="column" animation={{"type":"fadeIn","size":"medium"}} justify="stretch" wrap={false} max-width="30em">
           <Heading level="3" size="medium" margin="xsmall" textAlign="center" color="dark-5">
                Léa SEMIRAMOTH
            </Heading>
            <List
                primaryKey="designation"
                secondaryKey="result"
                data={[
                    { designation: `${translate('prezlist.functiontitle')}`, result: `${translate('prezlist.function')}` },
                    { designation: `${translate('prezlist.company')}`, result: `${translate('prezlist.melee')}` },
                    { designation: `${translate('prezlist.training')}`, result: `${translate('prezlist.mastere')}` },
                    { designation: `${translate('prezlist.school')}`, result: `${translate('prezlist.ynov')}` },
                    { designation: `${translate('prezlist.email')}`, result: `${translate('prezlist.emailadress')}` },
                    { designation: `${translate('prezlist.agetitle')}`, result: `${translate('prezlist.age')}` },
                    { designation: `${translate('prezlist.qualitytitle')}`, result: `${translate('prezlist.qualities')}` },
                    { designation: `${translate('prezlist.defaultitle')}`, result: `${translate('prezlist.defaults')}` },
                ]}
            />
        </Box>
    )
}

export default connect()(Biography)