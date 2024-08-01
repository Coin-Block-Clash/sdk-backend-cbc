import { Request, Response } from "express";


export function getRoot(req :Request , res : Response) {
    res.send(["Working  EC2"]);
}

export function getRootData(req :Request , res : Response) {
    res.send({"Error" : "Not Found"});
}


