import { Request, Response } from "express";
import { BookService } from "./service";
import { injectable } from "tsyringe";

@injectable()
export class BookController {
  constructor(private bookService: BookService) {}

  public create = async (req: Request, res: Response) => {
    const book = await this.bookService.create(req.body);

    return res.status(201).json(book);
  };

  public list = async (req: Request, res: Response) => {
    const books = await this.bookService.list();

    return res.status(200).json(books);
  };
}
