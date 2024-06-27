import { Request, Response } from "express";


export function getRoot(req :Request , res : Response) {
    res.send([]);
}

export function getRootData(req :Request , res : Response) {
    res.send({});
}