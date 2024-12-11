import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { DocumentationService } from "./documentation.service";

@swagger.ApiTags("documentations")
@common.Controller("documentations")
export class DocumentationController {
  constructor(protected readonly service: DocumentationService) {}
}
