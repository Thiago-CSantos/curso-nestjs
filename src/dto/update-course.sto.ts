import { PartialType } from "@nestjs/mapped-types";
import { CreateCourseDTO } from "./create-course.dto";


export class UpdateCourseDTO extends PartialType(CreateCourseDTO) {
      // // ? para campos opcionais
      // readonly name?: string;
      // readonly description?: string;
      // readonly tags?: string[];
}