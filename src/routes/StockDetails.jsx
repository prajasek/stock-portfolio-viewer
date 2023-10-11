import { useLoaderData } from "react-router";

export const StockDetails = () => {
    let data = useLoaderData();
    console.log(data);

    console.log("test");
    throw new Error("Testing");
    // return <div> <h1> Stock Details placeHolder </h1> </div>

}