  export let resumeLayout = [
    {
      type: 'fieldset',
      title: 'Resume',
      items: [
        {
          type: 'tabs',
          tabs: [
            {
              title: 'Basics',
              items: [ {
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
                { title: 'Employment History',
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
                          title: 'Highlight {{ $index }} ',
                          type: 'tabarray',
                          key: 'work[].highlights',
                          items: [
                            'work[].highlights[].description',
                          ]
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
                { title: 'Volunteer History',
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
                        {
                          title: 'Highlight {{ $index }} ',
                          type: 'tabarray',
                          key: 'volunteer[].highlights',
                          items: [
                            'volunteer[].highlights[].description',
                          ]
                        }
                      ]
                    }
                  ],
                }
              ]
            },

            {
              title: 'Education',
              items: [
                { title: 'Educational History',
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
                        {
                          title: 'Course',
                          type: 'tabarray',
                          key: 'education[].courses',
                          items: [
{ 
  key: 'education[].courses[].description',
  type: 'text'
},
                          ]
                        }
                      ]
                    }
                  ],
                }
              ]
            }
          ]
        }
      ]
    }
  ];
