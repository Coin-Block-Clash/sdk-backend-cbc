import express, { Request, Response } from 'express';
import { pool } from '../models/db';


const app = express();

export function write(req :Request , res : Response) {
    app.post('/write', async (req: Request, res: Response) => {
        const { data } = req.body;
        try {
          const client = await pool.connect();
          const query = 'INSERT INTO TestStage (column1, column2) VALUES ($1, $2)';
          const values = [data.field1, data.field2];
      
          await client.query(query, values);
          client.release();
      
          res.status(200).send('Data inserted successfully');
        } catch (error) {
          console.error('Error writing to database', error);
          res.status(500).send('Error writing to database');
        }
      });
}