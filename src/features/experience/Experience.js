import React from "react";
import { Box, Heading, Button, Text, Paragraph, Image } from 'grommet'
import { Previous } from 'grommet-icons'

const theme = {

}

const Experience = () => {
    let [exps, setExps] = React.useState(
    [
        { key: "jobstic", title: "JobsTIC", baseline: "Le formum des métiers du numérique et de l'innovation", desc: "Conception et développement Front-end / Back-end", technos:"Meteor.js & React.js", img:"https://s3.eu-central-1.amazonaws.com/jobstic/documents/logo_jobstic_compressor-min.png" },
        { key: "opencountry", title: "Open Country", baseline: "Les rencontres de la transformation numérique par La Mêlée", desc: "Conception et développement Front-end / Back-end", technos:"Meteor.js & React.js", img: "https://open-country.fr/images/icon_open_country.png" },
        { key: "meleegeodata", title: "Mêlée Géodata", baseline: "Rencontrer, partager innover", desc: "Conception et développement Front-end / Back-end", technos:"Meteor.js & React.js", img: "https://www.midenews.com/wp-content/uploads/2017/11/Geoda-300x114.jpg" },
        { key: "meleenumerique", title: "Mêlée Numérique", baseline: "Le festival du numérique et de l'innovation", desc: "Mises à jour fonctionnalités et contenu", technos:"WordPress", img: "https://www.alliancy.fr/wp-content/uploads/2020/09/visuel-classic-mn-300.jpg" },
        { key: "Rhinocc", title: "RhinOcc", baseline: "Réseau et Hub pour l'inclusion Numérique en Occitanie", desc: "Conception et développement Front-end / Back-end, Mises à jour fonctionnalités", technos:"WordPress", img: "https://rhinocc.fr/wp-content/uploads/2019/12/cropped-logo_rhinocc.png" },
        { key: "lamelee", title: "La Mêlée", baseline: "La Mêlée, 1er réseau d’experts du numérique en Occitanie !", desc: "Développement Front-end / Back-end, Mises à jour fonctionnalités", technos:"WordPress", img: "https://www.kidacom.com/wp-content/uploads/2019/09/logo_al_melee-kidacom.jpg" },
        { key: "midenews", title: "Mid e-news", baseline: "L'actualité numérique du Sud-Ouest", desc: "Conception et développement Front-end / Back-end", technos:"WordPress", img: "https://www.empruntemontoutou.com/wp-content/uploads/2016/04/midenews-420x222.png" },
        { key: "lacantine", title: "La Cantine Toulouse", baseline: "Espace de coworking", desc: "Conception et développement Front-end / Back-end", technos:"PHP", img: "https://lacantine-toulouse.org/wp-content/uploads/2013/02/LaCantine-V2-300x242.png" },
        { key: "habillage", title: "Habillage Streaming Live", baseline: "Edition infos pour habillage live", desc: "Conception et développement Front-end", technos:"React.js", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" },
    ]);

    return(
        <Box align="stretch" justify="center" direction="row-responsive" wrap="true" background={{"dark":false}}>
        {exps.map(exp => (
            <Box align="stretch" fil="horizontal" gap="xlarge" background={{"color":"#7F8C8D","position":"bottom"}} round="small" elevation="medium" margin="small" direction="column" animation={{"type":"fadeIn","size":"medium"}} justify="stretch" wrap={false} width="300px">
                <Box align="center" justify="center" pad="xsmall" margin="xsmall">
                    <Box height="small" width="small">
                        <Image 
                            fit="contain"
                            src={exp.img}
                        />
                    </Box>
                    <Heading level="3" size="medium" margin="xsmall" textAlign="center">
                        {exp.title}
                    </Heading>
                    <Text textAlign="center" size="small">
                        "{exp.baseline}"
                    </Text>
                    <Paragraph size="small" margin="xsmall" textAlign="center">
                        {exp.desc}
                    </Paragraph>
                    <Paragraph size="small" margin="xsmall" textAlign="center">
                       <strong>Langage(s) :</strong> {exp.technos}
                    </Paragraph>
                </Box>
            </Box>
        ))}; 
        </Box>
    );
}

export default Experience;