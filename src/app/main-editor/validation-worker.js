import { XmlDocument } from "libxml2-wasm";

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

await initialiseWebworker()


async function initialiseWebworker() {
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



}

onmessage = (data) => {
    console.log("message arrived");
    console.log(data);


}