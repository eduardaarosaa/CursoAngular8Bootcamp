import { Injectable } from "@angular/core";
import { Course } from "./course";

@Injectable({
    'providedIn': "root"
})

export class CourseService{

    retrieveAll(): Course[] {
        return COURSES;
    }
    
}

let COURSES: Course[] = [
    {
        id: 1,
        name: 'Angular: CLI',
        releaseDate: 'November 2, 2019',
        description: 'Neste curso, os alunos ir�o obter um grande conhecimento nos principais recursos do CLI.',
        duration: 120,
        code: 'XLF-1212',
        rating: 3,
        price: 12.99,
        imageUrl: '/assets/images/cli.png',
    },
    {
        id: 2,
        name: 'Angular: Forms',
        releaseDate: 'November 4, 2019',
        description: 'Neste curso, os alunos ir�o obter um conhecimento aprofundado sobre os recursos dispon�veis no m�dulo de Forms.',
        duration: 80,
        code: 'DWQ-3412',
        rating: 2,
        price: 24.99,
        imageUrl: '/assets/images/forms.png',
    },
    {
        id: 3,
        name: 'Angular: HTTP',
        releaseDate: 'November 8, 2019',
        description: 'Neste curso, os alunos ir�o obter um conhecimento aprofundado sobre os recursos dispon�veis no m�dulo de HTTP.',
        duration: 80,
        code: 'QPL-0913',
        rating: 5,
        price: 36.99,
        imageUrl: '/assets/images/http.png',
    },
    {
        id: 4,
        name: 'Angular: Router',
        releaseDate: 'November 16, 2019',
        description: 'Neste curso, os alunos ir�o obter um conhecimento aprofundado sobre os recursos dispon�veis no m�dulo de Router.',
        duration: 80,
        code: 'OHP-1095',
        rating: 1,
        price: 46.99,
        imageUrl: '/assets/images/router.png',
    },
    {
        id: 5,
        name: 'Angular: Animations',
        releaseDate: 'November 25, 2019',
        description: 'Neste curso, os alunos ir�o obter um conhecimento aprofundado sobre os recursos dispon�veis sobre Animation.',
        duration: 80,
        code: 'PWY-9381',
        rating: 5,
        price: 56.99,
        imageUrl: '/assets/images/animations.png',
    }
];