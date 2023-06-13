angular.module('portfolioApp', [])
  .controller('PortfolioController', function($scope) {
    $scope.name = 'Lohit M';
    $scope.bio = 'I am a web developer passionate about creating beautiful and functional websites.';
    $scope.projects = [
      { 
        name: 'Project ',
        description: 'Projects I worked on.',
        photos: [
          { url: 'photo1.jpg', caption: 'A beautiful photo' },
          { url: 'photo2.jpg', caption: 'Another great photo' }
        ],
        videos: [
          { url: 'path/to/video1.mp4', type: 'video/mp4', caption: 'An interesting video' },
          { url: 'path/to/video2.mp4', type: 'video/mp4', caption: 'A fun video' }
        ],
        metaFiles: [
          { url: 'path/to/file1.pdf', name: 'File 1', description: 'A PDF document' },
          { url: 'path/to/file2.zip', name: 'File 2', description: 'A ZIP archive' }
        ]
      },
      // Add more projects if needed...
    ];
  });
