import { ProjectsDto } from 'src/projects/dto';

export const projects: ProjectsDto[] = [
    {
        id: '1',
        name: 'Admin Popup',
        description: 'A WordPress plugin to display and manage popups in the admin/workspace.',
        skills: ['WordPress', 'PHP', 'CSS', 'HTML', 'JavaScript'],
        thumbnail: 'https://media.licdn.com/dms/image/sync/D5627AQExmTG6F0LJeg/articleshare-shrink_800/0/1698882327428?e=1699578000&v=beta&t=jQHmPnPe4a0k2g_e1udKmtbIxU-D7MzZozhZUjwjQpk',
        url: 'https://github.com/taneralberto/admin-popup'
    },
    {
        id: '2',
        name: 'Metodomasterua',
        description: 'A Landing Page in pure HTML and CSS with Facebook/Meta Pixel. So fast.',
        skills: ['HTML', 'CSS', 'SEO'],
        thumbnail: 'https://media.licdn.com/dms/image/sync/D5627AQHgjUEmpDaNXA/articleshare-shrink_800/0/1698882326812?e=1699578000&v=beta&t=gcRQnuzYYrtJOE1kapSeE410wBvvUGKvqJ6sZO5LDss',
        url: 'https://taneralberto.github.io/metodomasterua/'
    },
]