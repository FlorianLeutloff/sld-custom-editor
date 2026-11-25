console.log("HELP 1")
import { XmlDocument, XsdValidator, xmlRegisterInputProvider, XmlBufferInputProvider } from "libxml2-wasm";
console.log("HELP 2")
const schemaDictionary = {
    "1_0_0":{ 
        "sld": "",
        "ogc": "",
        "gml": ""
    },
    "1_1_0": {
        "sld": "",
        "ogc": "",
        "gml": ""
    }
}

const root100 = `/assets/sld/1_0_0/`
const root110 = `/assets/sld/1_1_0/`


await initialiseWebworker()


async function initialiseWebworker() {
    /*
    async function fetchSchemas() {
        const versionKeys = Object.keys(schemaDictionary);
        for(const version of versionKeys) {
            const schemaNames = Object.keys(schemaDictionary[version]);
            for(const schema of schemaNames) {
                try {
                    schemaDictionary[version][schema] = await (await fetch(`/assets/sld/${version}/${schema}.xsd`)).text()
                } catch(e) {
                    console.log("error during schema retrieval in webworker")

                }
            }
        }
    }
    */
   
    async function fetchSchema(url) {
        try {
            return await (await fetch(`/assets/sld/${version}/${schema}.xsd`)).body()
        } catch(e) {
            console.log("error during schema retrieval in webworker: "+url)
            return undefined
        }
    }
    
    //await fetchSchemas()

    const sld_100 = await fetchSchema(`${root100}sld/StyledLayerDescriptor.xsd`)
    const filter_100_filter = await fetchSchema(`${root100}filter/filter.xsd`)
    const filter_100_expr = await fetchSchema(`${root100}filter/expr.xsd`)
    const filter_100_filterCapabilities = await fetchSchema(`${root100}filter/filterCapabilities.xsd`)
    const gml_100_gml = await fetchSchema(`${root100}gml/gml.xsd`)
    const gml_100_feature = await fetchSchema(`${root100}gml/feature.xsd`)
    const gml_100_geometry = await fetchSchema(`${root100}gml/geometry.xsd`)
    const xlink_100 = await fetchSchema(`${root100}xlink/xlink.xsd`)

    const bufferInputProvider = new XmlBufferInputProvider()
    const sldDoc = XmlDocument.fromBuffer(sld_100)
    try {
        bufferInputProvider.addBuffer("xlink.xsd",xlink_100)
        bufferInputProvider.addBuffer("filter.xsd",filter_100_filter)
        bufferInputProvider.addBuffer("expr.xsd",filter_100_expr)
        bufferInputProvider.addBuffer("filterCapabilities.xsd",filter_100_filterCapabilities)
        bufferInputProvider.addBuffer("geometry.xsd",gml_100_geometry)
        bufferInputProvider.addBuffer("gml.xsd",gml_100_gml)
        bufferInputProvider.addBuffer("feature.xsd",gml_100_feature)
    } catch(e) {
        console.log("ERROR DURING BUFFER ADDING")
        console.log(e)
    }
    try {
        const validator = XsdValidator.fromDoc(sldDoc)
    } catch(e) {
        console.log("ERROR DURING VALIDATOR")
        console.log(e)
    }



}

onmessage = (data) => {
    console.log("message arrived");
    console.log(data);


}