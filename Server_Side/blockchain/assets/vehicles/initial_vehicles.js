'use strict';
let simple_scenario = {
    'cars': [
        {
            'VIN': '287437467447767',
            'Medicine_name ': 'Medicine # 1',
            'National_ID': '100004788',
            'Reg': 'LM16 YHU',
            'Owners': ['Hospital #1']
        },
        {
            'VIN': '549523556856725',
            'Medicine_name ': 'Medicine # 2',
            'National_ID': '100052188',
            'Reg': 'LM16 YHU',
            'Owners': ['Hospital #2']
        },
        {
            'VIN': '880352730316924',
            'Medicine_name ': 'Medicine # 3',
            'National_ID': '10004388',
            'Reg': 'LM16 YHU',
            'Owners': ['Hospital #3']
        }
    ]
};

let full_scenario = {
    'cars': [
        {
            'VIN': '720965981630055',
            'Make': 'venoder name #1',
            'Model': 'Medicine name # 1',
            'Colour': 'National_ID #1',
            'Owners': ['Ministry of Health', 'Hospital #1', 'Ministry of Health', 'Hospital #2']
        },
        {
            'VIN': '287437467447767',
            'Make': 'venoder #2',
            'Model': 'Medicine # 2',
            'Colour': 'National_ID #2',
            'Owners': ['Ministry of Health', 'Hospital #3', 'Ministry of Health']
        },
        {
            'VIN': '948881310167423',
            'Make': 'venoder #3',
            'Model': 'Medicine # 3',
            'Colour': 'National_ID #3',
            'Owners': ['Ministry of Health', 'Hospital #3', 'Ministry of Health', 'Hospital #1']
        },
        {
            'VIN': '181255391772389',
            'Make': 'venoder name #4',
            'Model': 'Medicine name # 4',
            'Colour': 'National_ID #4',
            'Owners': ['Ministry of Health', 'Hospital #4', 'Ministry of Health', 'Hospital #3']
        }
    ]
};


exports.simple = simple_scenario;
exports.full = full_scenario;
