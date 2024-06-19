import * as graphql from "@nestjs/graphql";
import { DocumentationService } from "./documentation.service";

export class DocumentationResolver {
  constructor(protected readonly service: DocumentationService) {}
}
