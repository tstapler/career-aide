export let resumeLayout = [
  {
    type: 'fieldset',
    title: 'Resume Editor',
    items: [
      {
        type: 'tabs',
        tabs: [
          {
            title: 'Basics',
            items: [{
              title: 'Bio',
              type: 'section',
              items: [
                'basics.name',
                'basics.label',
                'basics.image',
                'basics.email',
                'basics.phone',
                'basics.url',
                'basics.summary',
              ]
            },
            {
              title: 'Location',
              type: 'section',
              items: [
                'basics.location.address',
                'basics.location.postalCode',
                'basics.location.city',
                'basics.location.countryCode',
                'basics.location.region'
              ]
            },
            {
              title: 'Social Media',
              type: 'section',
              items: [
                {
                  title: '{{ value.network || "New" }} Profile',
                  key: 'basics.profiles',
                  type: 'tabarray',
                  add: 'New',
                  delete: 'Remove',
                  items: [
                    'basics.profiles[].network',
                    'basics.profiles[].username',
                    'basics.profiles[].url',
                  ]
                }
              ],
            }
            ]
          },
          {
            title: 'Work',
            items: [
              {
                title: 'Employment History',
                type: 'section',
                items: [
                  {
                    title: '{{ value.name || "History" }}',
                    key: 'work',
                    type: 'tabarray',
                    add: 'New',
                    delete: 'Remove',
                    items: [
                      'work[].name',
                      'work[].description',
                      'work[].position',
                      'work[].url',
                      'work[].startDate',
                      'work[].endDate',
                      'work[].summary',
                      {
                        key: 'work[].highlights',
                        type: 'text'
                      }
                    ]
                  }
                ],
              }
            ]
          },
          {
            title: 'Volunteering',
            items: [
              {
                title: 'Volunteer History',
                type: 'section',
                items: [
                  {
                    title: '{{ value.name || "History" }}',
                    key: 'volunteer',
                    type: 'tabarray',
                    add: 'New',
                    delete: 'Remove',
                    items: [
                      'volunteer[].organization',
                      'volunteer[].position',
                      'volunteer[].url',
                      'volunteer[].startDate',
                      'volunteer[].endDate',
                      'volunteer[].summary',
                      'volunteer[].highlights',
                    ],
                    startEmpty: true
                  }
                ],
              }
            ]
          },

          {
            title: 'Education',
            items: [
              {
                title: 'Educational History',
                type: 'section',
                items: [
                  {
                    title: '{{ value.name || "History" }}',
                    key: 'education',
                    type: 'tabarray',
                    add: 'New',
                    delete: 'Remove',
                    items: [
                      'education[].institution',
                      'education[].area',
                      'education[].studyType',
                      'education[].startDate',
                      'education[].endDate',
                      'education[].gpa',
                      'education[].courses',
                    ]
                  }
                ]
              }
            ],
          },
          {
            title: 'Awards',
            items: [
              {
                type: 'section',
                items: [
                  {
                    title: '{{ value.name || "Award" }}',
                    key: 'awards',
                    type: 'tabarray',
                    add: 'New',
                    delete: 'Remove',
                    items: [
                      'awards[].title',
                      'awards[].date',
                      'awards[].awarder',
                      'awards[].summary',
                    ]
                  }
                ]
              }
            ],
          },
          {
            title: 'Publications',
            items: [
              {
                type: 'section',
                items: [
                  {
                    title: '{{ value.name || "Publication" }}',
                    key: 'publications',
                    type: 'tabarray',
                    add: 'New',
                    delete: 'Remove',
                    items: [
                      'publications[].name',
                      'publications[].publisher',
                      'publications[].releaseDate',
                      'publications[].url',
                      'publications[].summary',
                    ]
                  }
                ]
              }
            ],
          },
          {
            title: 'Skills',
            items: [
              {
                type: 'section',
                items: [
                  {
                    title: '{{ value.name || "Skill" }}',
                    key: 'skills',
                    type: 'tabarray',
                    add: 'New',
                    delete: 'Remove',
                    items: [
                      'skills[].name',
                      'skills[].level',
                      'skills[].keywords',
                    ]
                  }
                ]
              }
            ],
          },
          {
            title: 'Languages',
            items: [
              {
                type: 'section',
                items: [
                  {
                    title: '{{ value.name || "Languages" }}',
                    key: 'languages',
                    type: 'tabarray',
                    add: 'New',
                    delete: 'Remove',
                    items: [
                      'languages[].language',
                      'languages[].fluency',
                    ]
                  }
                ]
              }
            ],
          },
          {
            title: 'Interests',
            items: [
              {
                type: 'section',
                items: [
                  {
                    title: '{{ value.name || "Interest" }}',
                    key: 'interests',
                    type: 'tabarray',
                    add: 'New',
                    delete: 'Remove',
                    items: [
                      'interests[].name',
                      'interests[].keywords',
                    ]
                  }
                ]
              }
            ],
          },
          {
            title: 'References',
            items: [
              {
                type: 'section',
                items: [
                  {
                    title: '{{ value.name || "Reference" }}',
                    key: 'references',
                    type: 'tabarray',
                    add: 'New',
                    delete: 'Remove',
                    items: [
                      'references[].name',
                      'references[].reference',
                    ]
                  }
                ]
              }
            ],
          },
          {
            title: 'Projects',
            items: [
              {
                type: 'section',
                items: [
                  {
                    title: '{{ value.name || "Project" }}',
                    key: 'projects',
                    type: 'tabarray',
                    add: 'New',
                    delete: 'Remove',
                    items: [
                      'projects[].name',
                      'projects[].description',
                      'projects[].highlights',
                      'projects[].keywords',
                      'projects[].startDate',
                      'projects[].endDate',
                      'projects[].url',
                      'projects[].roles',
                      'projects[].entity',
                      'projects[].type',
                    ]
                  }
                ]
              }
            ],
          },

        ]
      }
    ]
  }
];
