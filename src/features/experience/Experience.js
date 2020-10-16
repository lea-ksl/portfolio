import React from "react";
import { Box, Heading, Button, Text, Paragraph } from 'grommet'
import { Previous } from 'grommet-icons'

const theme = {

}

const Experience = () => {
    let [exps, setExps] = React.useState(); 
    exps = [
        { key: "jobstic", title: "JobsTIC", baseline: "Le formum des métiers du numérique et de l'innovation", desc: "Conception et développement Front-end et Back-end", technos:"Meteor.js & React.js" },
        { key: "meleegeodata", title: "Mêlée Géodata", baseline: "Rencontrer, partager innover", desc: "Conception et développement Front-end et Back-end", technos:"Meteor.js & React.js" },
        { key: "opencountry", title: "Open Country", baseline: "Les rencontres de la transformation numérique par La Mêlée", desc: "Conception et développement Front-end et Back-end", technos:"Meteor.js & React.js" },
        { key: "habillage", title: "Habillage Streaming Live", baseline: "Edition infos pour habillage live", desc: "Conception et développement Front-end", technos:"Meteor.js & React.js" },
        { key: "meleenumerique", title: "Mêlée Numérique", baseline: "Le festival du numérique et de l'innovation", desc: "Conception et développement Front-end et Back-end", technos:"Meteor.js & React.js" },
        { key: "lamelee", title: "La Mêlée", baseline: "La Mêlée, 1er réseau d’experts du numérique en Occitanie !", desc: "Conception et développement Front-end et Back-end", technos:"Meteor.js & React.js" },
        { key: "Rhinocc", title: "RhinOcc", baseline: "Réseau et Hub pour l'inclusion Numérique en Occitanie", desc: "Conception et développement Front-end et Back-end", technos:"Meteor.js & React.js" },
        { key: "midenews", title: "Mid e-news", baseline: "L'actualité numérique du Sud-Ouest", desc: "Conception et développement Front-end et Back-end", technos:"Meteor.js & React.js" },
        { key: "lacantine", title: "La Cantine Toulouse", baseline: "Espace de coworking et location de salles", desc: "Conception et développement Front-end et Back-end", technos:"Meteor.js & React.js" },
    ];

    return(
        <Box align="center" justify="center" direction="row-responsive" wrap="true" background={{"dark":false}}>
        {exps.map(exp => (
            <Box align="center" pad="small" background={{"color":"white","position":"bottom"}} round="medium" elevation="xlarge" margin="small" direction="column" alignSelf="center" animation={{"type":"fadeIn","size":"medium"}} justify="center" wrap={false} width="medium">
                <Box align="center" justify="center" pad="xsmall" margin="xsmall">
                    <Box align="center" justify="center" pad="large" margin="medium" background={{"dark":false,"color":"light-2","image":"url('https://media-exp1.licdn.com/dms/image/C5603AQHimKcq3aVRVw/profile-displayphoto-shrink_400_400/0?e=1608163200&v=beta&t=WoPsmsSTWFM0jB4rUuXjGYXlt5dTcu0JOrapOTeDfiA\n')"}} round="full" />
                    <Heading level="3" size="medium" margin="xsmall" textAlign="center">
                        {exp.title}
                    </Heading>
                    <Text textAlign="center">
                        {exp.baseline}
                    </Text>
                    <Paragraph size="small" margin="xsmall" textAlign="center">
                        {exp.desc}
                    </Paragraph>
                    <Paragraph size="small" margin="xsmall" textAlign="center">
                        {exp.technos}
                    </Paragraph>
                    <Box align="center" justify="center" pad="small" direction="row-responsive" flex alignSelf="center" basis="xxsmall" gap="small" margin="xsmall">
                        <Button label="Portfolio" primary plain={false} color="light-1" />
                        <Button label="Hire Me" disabled={false} hoverIndicator={false} color="dark-2" />
                    </Box> 
                </Box>
            </Box>
        ))}; 
        </Box>
    );
}

export default Experience;