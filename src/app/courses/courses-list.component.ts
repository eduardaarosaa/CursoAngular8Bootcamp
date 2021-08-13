import { Component, OnInit } from "@angular/core";
import { Course } from "./course";


@Component({
    selector : "app-course-list",
    templateUrl: './courses-list-componet.html'
})
export class CourseListComponent implements OnInit{

    courses: Course[] = [];

    ngOnInit() :void{
        this.courses = [
            {
            id: 1,
            name: 'Angular: Fontes',
            imageUrl:'string',
            price: 99.90,
            code: 'XPS-79',
            duration: 120,
            rating: 5.40,
            releaseDate: 'Agosto, 12 de 2021'
        },
        {
            id: 2,
            name: 'Angular: Fontes',
            imageUrl:'string',
            price: 99.90,
            code: 'XPS-79',
            duration: 120,
            rating: 5.40,
            releaseDate: 'Agosto, 15 de 2021'
        },
        {
            id: 3,
            name: 'Angular: Fontes',
            imageUrl:'string',
            price: 99.90,
            code: 'XPS-79',
            duration: 120,
            rating: 5.40,
            releaseDate: 'Agosto, 20 de 2021'
        }
        ];
    }

}