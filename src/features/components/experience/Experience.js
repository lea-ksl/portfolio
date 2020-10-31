import React from "react";
import { Box, Heading, Button, Text, Paragraph, Image, Layer } from 'grommet'
import { connect } from 'react-redux'
import { useTranslate } from 'react-redux-multilingual'



const Experience = () => {
    const translate = useTranslate()
    const [index, setIndex] = React.useState()
    const [show, setShow] = React.useState()
    let [exps] = React.useState(
    [
        { key: translate("jobstic.key"), title: translate("jobstic.title"), baseline: translate("jobstic.baseline"), desc: translate("jobstic.desc"), technos: translate("jobstic.technos"), img: translate("jobstic.img"), link: translate("jobstic.link") },
        { key: translate("opencountry.key"), title: translate("opencountry.title"), baseline: translate("opencountry.baseline"), desc: translate("opencountry.desc"), technos: translate("opencountry.technos"), img: translate("opencountry.img"), link: translate("opencountry.link") },
        { key: translate("meleegeodata.key"), title: translate("meleegeodata.title"), baseline: translate("meleegeodata.baseline"), desc: translate("meleegeodata.desc"), technos: translate("meleegeodata.technos"), img: translate("meleegeodata.img"), link: translate("meleegeodata.link") },
        { key: translate("meleenumerique.key"), title: translate("meleenumerique.title"), baseline: translate("meleenumerique.baseline"), desc: translate("meleenumerique.desc"), technos: translate("meleenumerique.technos"), img: translate("meleenumerique.img"), link: translate("meleenumerique.link") },
        { key: translate("rhinocc.key"), title: translate("rhinocc.title"), baseline: translate("rhinocc.baseline"), desc: translate("rhinocc.desc"), technos: translate("rhinocc.technos"), img: translate("rhinocc.img"), link: translate("rhinocc.link") },
        { key: translate("lamelee.key"), title: translate("lamelee.title"), baseline: translate("lamelee.baseline"), desc: translate("lamelee.desc"), technos: translate("lamelee.technos"), img: translate("lamelee.img"), link: translate("lamelee.link") },
        { key: translate("midenews.key"), title: translate("midenews.title"), baseline: translate("midenews.baseline"), desc: translate("midenews.desc"), technos: translate("midenews.technos"), img: translate("midenews.img"), link: translate("midenews.link") },
        { key: translate("lacantine.key"), title: translate("lacantine.title"), baseline: translate("lacantine.baseline"), desc: translate("lacantine.desc"), technos: translate("lacantine.technos"), img: translate("lacantine.img"), link: translate("lacantine.link") },
        { key: translate("habillage.key"), title: translate("habillage.title"), baseline: translate("habillage.baseline"), desc: translate("habillage.desc"), technos: translate("habillage.technos"), img: translate("habillage.img"), link: translate("habillage.link") },
        { key: translate("fa2d.key"), title: translate("fa2d.title"), baseline: translate("fa2d.baseline"), desc: translate("fa2d.desc"), technos: translate("fa2d.technos"), img: translate("fa2d.img"), link: translate("fa2d.link") },
        { key: translate("meetthebig.key"), title: translate("meetthebig.title"), baseline: translate("meetthebig.baseline"), desc: translate("meetthebig.desc"), technos: translate("meetthebig.technos"), img: translate("meetthebig.img"), link: translate("meetthebig.link") },
        { key: translate("ndr.key"), title: translate("ndr.title"), baseline: translate("ndr.baseline"), desc: translate("ndr.desc"), technos: translate("ndr.technos"), img: translate("ndr.img"), link: translate("ndr.link") },
    ]);

    return(
        <Box align="stretch" justify="center" direction="column-responsive" wrap="true" background={{"dark":false}}>
            
            <Box align="stretch" justify="center" direction="row-responsive" wrap="true" background={{"dark":false}}>
                {exps.map((exp, i) => (
                    <Box align="stretch" fil="horizontal" gap="xlarge" background={{"color":"#999999","position":"bottom"}} round="small" elevation="medium" margin="small" direction="column" animation={{"type":"fadeIn","size":"medium"}} justify="stretch" wrap={false} width="300px">
                        <Box align="center" justify="center" pad="xsmall" margin="xsmall">
                            <Box height="small" width="small">
                                <Image 
                                    fit="contain"
                                    src={exp.img}
                                />
                            </Box>
                            <Box>
                                <Button label={translate('details')} onClick={() => {setShow(true); setIndex(i)}} disabled={false} hoverIndicator color="dark-2" active={false} plain={false} primary={false} reverse={false} secondary={false} />
                            </Box>
                        </Box>
                    </Box>
                ))}; 
                <Box>
                    {show && (
                        <Layer
                            onEsc={() => setShow(false)}
                            onClickOutside={() => setShow(false)}
                        >
                            <Box align="center" justify="center" pad="medium">
                                <Box height="small" width="small" pad="meidum">
                                    <Image align="center" justify="center"
                                        fit="contain"
                                        src={exps[index].img}
                                    />
                                </Box>
                                <Heading level="3" size="medium" margin="xsmall" textAlign="center" color="#333333">
                                    {exps[index].title}
                                </Heading>
                                <Text textAlign="center" size="small" color="#333333">
                                    <strong>Baseline :</strong> "{exps[index].baseline}"
                                </Text>
                                <Paragraph size="small" margin="xsmall" textAlign="center">
                                    <strong>Description :</strong> {exps[index].desc}
                                </Paragraph>
                                <Paragraph size="small" margin="xsmall" textAlign="center">
                                    <strong>{translate('lang')} :</strong> {exps[index].technos}
                                </Paragraph>
                                <Box align="center" justify="space-evenly" direction="row-responsive" wrap="true" background={{"dark":false}} gap="medium">
                                    <Button label={translate('visit')} href={exps[index].link} target="_blank" disabled={false} hoverIndicator color="dark-2" active={false} plain={false} primary={true} reverse={false} secondary={false} />
                                    <Button label={translate("down")} onClick={() => setShow(false)} disabled={false} hoverIndicator color="dark-2" active={false} plain={false} primary={false} reverse={false} secondary={false} />
                                </Box>
                            </Box>
                        </Layer>
                    )}
                </Box>
            </Box>
        </Box>
    );
}   

export default connect()(Experience)