import React from 'react';
import NavBar from '../../components/navigation/NavBar'
import Puzzle from 'react-image-puzzle-touch';
import Biography from '../../components/biography/Biography'
import { Grommet, Box, Header, Heading } from 'grommet'

const theme = {
    "global": {
        "font": {
            "family": "\"Open Sans\"",
            "face": "/* cyrillic-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWJ0bf8pkAp6a.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFUZ0bf8pkAp6a.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWZ0bf8pkAp6a.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVp0bf8pkAp6a.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWp0bf8pkAp6a.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFW50bf8pkAp6a.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0bf8pkAg.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n"
        },
        "colors": {
            "brand": "#ED6F00",
            "light": "#DADADA",
            "background": {
                "dark": "#111111",
                "light": "#FFFFFF"
            }
        },
        "heading" : {
            "font": {
                "family": "\"Rock Salt\"",
                "face": "/* cyrillic-ext */\n@font-face {\n  font-family: 'Rock Salt';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Rock Salt Regular'), local('RockSalt-Regular'), url(https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap);\n \n}\n/*"
            }
        }
    }
}
    

const Presentation = () => {

    return(
        <Grommet full theme={theme}>
            <Box width="100%" align="center" justify="center" background={{"dark":false, 'image':'url(https://ksl-webdesign.com/wp-content/uploads/2016/06/marbrenoirsite.jpg)', "size": "contain", 'repeat': 'repeat'}} height="100vh">
                <NavBar />
                <Header align="center" direction="row" flex={false} justify="between" gap="medium">
                    <Heading color="light">Présentation</Heading>
                </Header>
                <Box  width="100%" align="center" justify="evenly" direction="row-responsive" wrap="true">
                    <Puzzle
                        image='http://ksl-webdesign.com/wp-content/uploads/2016/04/lea.jpg?w=646&ssl=1%20646w,%20https://i0.wp.com/ksl-webdesign.com/wp-content/uploads/2016/04/lea.jpg?resize=150%2C150&ssl=1%20150w,%20https://i0.wp.com/ksl-webdesign.com/wp-content/uploads/2016/04/lea.jpg?resize=250%2C252&ssl=1%20250w,%20https://i0.wp.com/ksl-webdesign.com/wp-content/uploads/2016/04/lea.jpg?resize=120%2C121&ssl=1%20120w'
                    />
                    <Biography />
                </Box>
            </Box>
        </Grommet>
        
    )

}

export default Presentation;