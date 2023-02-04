const lastBackup = 1546300800
const changes = [
    [ 3, 1546301100 ],
    [ 2, 1546300800 ],
    [ 1, 1546300800 ],
    [ 1, 1546300900 ],
    [ 1, 1546301000 ]
]

function getFilesToBackup(lastBackup, changes) {
    const M_backup = changes.map((_, index, arr)=>{
        console.log(arr[index][0])
        return arr[index][1]>lastBackup? arr[index][0]:[];
    })
     const backup = M_backup.filter((value, index, self) => typeof value === 'number' 
    
     && self.indexOf(value) === index  ).sort((a, b) => a - b);
      
     return backup
    }

    console.log(getFilesToBackup(lastBackup, changes))