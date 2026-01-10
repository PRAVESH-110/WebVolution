import {Scan} from "../model/model.scan.js"
import homepageAnalyzer from "../analyzers/homepageAnalyzer.js"
import computeScore from "../scoring/computeScore.js"

async function processScan(scanId){
    try{
        //scan and update the status
    const scanning= await Scan.findById(scanId);

    await scanning.findByIdAndUpdate(scanId,{
        status:"running"
    })

    const scan= await Scan.findById(scanId);
    if(!scan) return;

    const response= await fetch(scan.url, {
        method: "GET",
        redirect: "follow"
    });

    //getting the html format 
    const html = await response.text();

    //analyze the homepage html
    const analyze=  homepageAnalyzer(html);

    //score the analyzed data
    const score= computeScore(analyze);

    //save the resuts
    await Scan.findByIdAndUpdate(scanId,{
        status:"completed",
        score,
        issues:analyze.issues,
        meta: analyze.meta
    });
    }
    catch(err){
        console.error("error failes");

        await findByIdAndUpdate(scanId,{
            status:"failed"
        })
    }
}
export default processScan;