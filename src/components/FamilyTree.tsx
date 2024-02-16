import React, { useEffect } from 'react';
import * as echarts from 'echarts';

interface TreeNode {
  name: string;
  children?: TreeNode[];
}

function FamilyTree() {
  useEffect(() => {
    const chart = echarts.init(document.getElementById('family-tree')!);

    const treeData = {
        name: '1',
        children: [
          {
            name: '2',
            children: [
              {
                name: '3',
                children: [
                  { name: '5'},
                  { name: '6'}
                ]
              },
              {
                name: '4',
                children: [
                    { name: '7'},
                    { name: '8'}
                  ]
              }
            ]
          },
        ]
      };


    const options = {

        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
          },
          series: [
            {
              type: 'tree',
              data: [treeData],
        
              top: '10%',
              left: '8%',
              bottom: '22%',
              right: '20%',
        
              symbolSize: 50,
        
              edgeShape: 'polyline',
              edgeForkPosition: '63%',
              initialTreeDepth: 3,
        
              lineStyle: {
                width: 1
              },
        
              label: {
                backgroundColor: '',
                color: 'white',
                fontSize: 14,
                position: 'left',
                verticalAlign: 'bottom',
                align: 'right'
              },
        
              leaves: {
                label: {
                  position: 'right',
                  verticalAlign: 'middle',
                  align: 'left'
                }
              },
        
              emphasis: {
                focus: 'descendant',
              },
        
              expandAndCollapse: true,
              animationDuration: 550,
              animationDurationUpdate: 750
            }
          ]
        };

    chart.setOption(options);

    return () => {
      chart.dispose();
    };
  }, []);

  return <div id="family-tree" style={{ width: '100%', height: '500px' }} />;
}

export default FamilyTree;
