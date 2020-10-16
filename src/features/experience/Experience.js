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
        { key: "meleegeodata", title: "Mêlée Géodata", baseline: "Rencontrer, partager innover", desc: "Conception et développement Front-end / Back-end", technos:"Meteor.js & React.js", img: "https://meleegeodata.s3.eu-central-1.amazonaws.com/logo_melee_geodata.png" },
        { key: "meleenumerique", title: "Mêlée Numérique", baseline: "Le festival du numérique et de l'innovation", desc: "Mises à jour fonctionnalités et contenu", technos:"WordPress", img: "https://meleenumerique.s3.eu-central-1.amazonaws.com/documents/LogoMN-Main-Colorx2.png" },
        { key: "Rhinocc", title: "RhinOcc", baseline: "Réseau et Hub pour l'inclusion Numérique en Occitanie", desc: "Conception et développement Front-end / Back-end, Mises à jour fonctionnalités", technos:"WordPress", img: "https://rhinocc.fr/wp-content/uploads/2019/12/cropped-logo_rhinocc.png" },
        { key: "lamelee", title: "La Mêlée", baseline: "La Mêlée, 1er réseau d’experts du numérique en Occitanie !", desc: "Développement Front-end / Back-end, Mises à jour fonctionnalités", technos:"WordPress", img: "https://meleenumerique.s3.eu-central-1.amazonaws.com/partners/1499775841040-logo-melee-version-quadri-converti.png" },
        { key: "midenews", title: "Mid e-news", baseline: "L'actualité numérique du Sud-Ouest", desc: "Conception et développement Front-end / Back-end", technos:"WordPress", img: "https://meleenumerique.s3.eu-central-1.amazonaws.com/partners/Plan+de+travail+1.png" },
        { key: "lacantine", title: "La Cantine Toulouse", baseline: "Espace de coworking", desc: "Conception et développement Front-end / Back-end", technos:"PHP", img: "https://lacantine-toulouse.org/wp-content/uploads/2013/02/LaCantine-V2-300x242.png" },
        { key: "habillage", title: "Habillage Streaming Live", baseline: "Edition infos pour habillage live", desc: "Conception et développement Front-end", technos:"React.js", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" },
        { key: "fa2d", title: "FA2D", baseline: "Forum de l'Agriculture Digitale et Durable", desc: "Conception et développement Front-end / Back-end", technos:"Meteor.js & React.js", img: "https://s3.eu-central-1.amazonaws.com/testfa2d/images/logo_fa2d.png" },
        { key: "meetthebig", title: "Meet The Big", baseline: "LA rencontre entre les startups et les BIG", desc: "Développement Front-end / Back-end, Mises à jour fonctionnalités", technos:"WordPress", img: "https://meetthebig.com/wp-content/uploads/2019/07/mtb-logo.png" },
        { key: "ndr", title: "Nuit Des Réseaux", baseline: "Le rassemblement des clubs et réseaux d'entreprises du Sud-Ouest", desc: "Développement Front-end / Back-end, Mises à jour fonctionnalités", technos:"WordPress", img: "https://nuit-des-reseaux.com/wp-content/uploads/2019/01/logo-NDR-general-blanc.png" },
    ]);

    return(
        <Box align="stretch" justify="center" direction="row-responsive" wrap="true" background={{"dark":false}}>
        {exps.map(exp => (
            <Box align="stretch" fil="horizontal" gap="xlarge" background={{"color":"#999999","position":"bottom"}} round="small" elevation="medium" margin="small" direction="column" animation={{"type":"fadeIn","size":"medium"}} justify="stretch" wrap={false} width="300px">
                <Box align="center" justify="center" pad="xsmall" margin="xsmall">
                    <Box height="small" width="small">
                        <Image 
                            fit="contain"
                            src={exp.img}
                        />
                    </Box>
                    <Heading level="3" size="medium" margin="xsmall" textAlign="center" color="#333333">
                        {exp.title}
                    </Heading>
                    <Text textAlign="center" size="small" color="#333333">
                        "{exp.baseline}"
                    </Text>
                    <Paragraph size="small" margin="xsmall" textAlign="center" color="light">
                        {exp.desc}
                    </Paragraph>
                    <Paragraph size="small" margin="xsmall" textAlign="center">
                       <strong style={{color: "#333333"}}>Langage(s) :</strong> {exp.technos}
                    </Paragraph>
                </Box>
            </Box>
        ))}; 
        </Box>
    );
}

export default Experience;