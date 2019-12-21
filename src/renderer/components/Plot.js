export class Plot {
  constructor(container, state) {
    this._config = {
      name: "ec2-grid",
      multiSelect: false,
      multiSearch: false,
      show: {
        selectColumn: true,
        toolbar: true,
        // footer: true
      },
      toolbar: {
        // style: "padding:2px; background: #e1e1e1",
        items: [
          { type: "spacer" },
          {
            type: "radio",
            id: "show-all",
            group: "1",
            caption: "All",
            hint: "Show resources from all accounts"
          },{
            type: "radio",
            id: "show-dev",
            group: "1",
            caption: "Dev",
            hint: "Show resources from only Dev account"
          },
          {
            type: "radio",
            id: "show-stage",
            group: "1",
            caption: "Stage",
            hint: "Show resources from only Stage account",
            checked: true
          },
          {
            type: "radio",
            id: "show-prod",
            group: "1",
            caption: "Prod",
            hint: "Show resources from only Prod account"
          }
        ]
      },
      searches: [
        { field: "name", caption: "Instance Name", type: "text" },
        { field: "id", caption: "Instance ID", type: "text" },
        { field: "status", caption: "Status", type: "text" }
      ],
      sortData: [{ field: "recid", direction: "ASC" }],
      columns: [
        { field: "name", caption: "Instance Name", size: "60", sortable: true  },
        { field: "id", caption: "Instance ID", size: "30", sortable: true  },
        { field: "status", caption: "Status", size: "10", sortable: true  }
      ]
    };

    this._container = container.getElement();

    container.on(
      "open",
      function() {
        var w2gridInstance = $(this._container).w2grid(this._config);
        
        w2gridInstance.add([
          {
            recid: 1,
            id: "i-002b29d98307aae1d",
            name: "tf-prod-website-prod-consumer-ecscluster-i",
            status: "running"
          },
          {
            recid: 2,
            id: "i-0e201dc2c97928040",
            name: "tf-prod-website-prod-associate-ecscluster-i",
            status: "running"
          },
          {
            recid: 3,
            id: "i-02585d9aa96b5e972",
            name: "tf-prod-website-prod-associate-ecscluster-i",
            status: "running"
          },
          {
            recid: 4,
            id: "i-067f9325879a0668a",
            name: "tf-prod-ec2-sftpserver-main",
            status: "running"
          },
          {
            recid: 5,
            id: "i-0780875d9eb6f31ad",
            name: "tf-prod-bastion-prod",
            status: "running"
          },
          {
            recid: 6,
            id: "i-0e51e40418825ccf1",
            name: "tf-prod-website-prod-mongodb",
            status: "running"
          },
          {
            recid: 7,
            id: "i-0ac0d5b6635d1bba5",
            name: "tf-prod-payments-prod-ecscluster-i",
            status: "running"
          },
          {
            recid: 8,
            id: "i-01cefebc400bff4c8",
            name: "tf-prod-website-prod-consumer-ecscluster-i",
            status: "running"
          },
          {
            recid: 9,
            id: "i-0eae6546563314bc5",
            name: "tf-prod-website-prod-consumer-ecscluster-i",
            status: "running"
          },
          {
            recid: 10,
            id: "i-039942184c932cecf",
            name: "tf-prod-website-prod-associate-ecscluster-i",
            status: "running"
          },
          {
            recid: 1,
            id: "i-0aaeb38e2750c4af0",
            name: "tf-prod-website-prod-cronjobs-ecscluster-i",
            status: "running"
          },
          {
            recid: 1,
            id: "i-08eda3ac11696c829",
            name: "tf-prod-marketplaces-prod-ecscluster-i",
            status: "running"
          },
          {
            recid: 1,
            id: "i-010ae03a25f61aac8",
            name: "tf-prod-website-prod-consumer-ecscluster-i",
            status: "running"
          },
          {
            recid: 1,
            id: "i-0c0692f9516ff47ba",
            name: "tf-prod-website-prod-associate-ecscluster-i",
            status: "running"
          },
          {
            recid: 1,
            id: "i-0d44095d0ee4bcadb",
            name: "tf-stage-website-prod-associate-ecscluster-i",
            status: "running"
          },
          {
            recid: 1,
            id: "i-080c742998a651e49",
            name: "tf-stage-marketplaces-stage2-ecscluster-i",
            status: "running"
          },
          {
            recid: 1,
            id: "i-0748d3d34ab5431dd",
            name: "tf-stage-payments-stage1-ecscluster-i",
            status: "running"
          },
          {
            recid: 1,
            id: "i-0d6881139f3f66d8a",
            name: "tf-stage-marketplaces-stage1-ecscluster-i",
            status: "running"
          },
          {
            recid: 1,
            id: "i-095bf48c25c3a7bb2",
            name: "tf-stage-website-prod-consumer-ecscluster-i",
            status: "running"
          },
          {
            recid: 1,
            id: "i-01c931d455a42fde8",
            name: "tf-stage-taxduties-stage1-ecscluster-i",
            status: "running"
          },
          {
            recid: 1,
            id: "i-0f987d2e45a31af54",
            name: "tf-stage-qa-prod-jenkins",
            status: "running"
          },
          {
            recid: 1,
            id: "i-01a15de60aff149bd",
            name: "tf-stage-bastion-stage",
            status: "running"
          },
          {
            recid: 1,
            id: "i-0d467fb018f75efef",
            name: "tf-stage-website-prod-mongodb",
            status: "running"
          },
          {
            recid: 1,
            id: "i-0f2a06336894eb7ba",
            name: "tf-stage-website-prod-cronjobs-ecscluster-i",
            status: "running"
          },
          {
            recid: 1,
            id: "i-005ba2febf090df0c",
            name: "tf-stage-website-stage3-mongodb",
            status: "running"
          },
          {
            recid: 1,
            id: "i-0d9efb8e4103f566e",
            name: "tf-stage-website-stage4-mongodb",
            status: "running"
          },
          {
            recid: 1,
            id: "i-065aeba25ea6c96eb",
            name: "tf-stage-website-stage1-mongodb",
            status: "running"
          },
          {
            recid: 1,
            id: "i-0a5832a3e02c3e6c9",
            name: "tf-stage-website-stage2-mongodb",
            status: "running"
          },
          {
            recid: 1,
            id: "i-05fbcefb50e8c2fc9",
            name: "tf-stage-website-stage5-mongodb",
            status: "running"
          },
          {
            recid: 1,
            id: "i-0dcd6007aa540d598",
            name: "tf-stage-shipping-stage1-ecscluster-i",
            status: "running"
          },
          {
            recid: 1,
            id: "i-06e8edd2f672877c0",
            name: "tf-stage-website-stage2-ecscluster-i",
            status: "running"
          },
          {
            recid: 1,
            id: "i-0c3216a60d60f7f50",
            name: "tf-stage-store-stage1-ecscluster-i",
            status: "running"
          },
          {
            recid: 1,
            id: "i-0c614d67acb11d002",
            name: "tf-stage-website-stage3-ecscluster-i",
            status: "running"
          },
          {
            recid: 1,
            id: "i-0394ed30ed867e809",
            name: "tf-stage-website-stage4-ecscluster-i",
            status: "running"
          },
          {
            recid: 1,
            id: "i-0753c4eba6a32eaac",
            name: "tf-stage-payments-stage2-ecscluster-i",
            status: "running"
          },
          {
            recid: 1,
            id: "i-0d503ea55c410f769",
            name: "tf-stage-website-stage1-ecscluster-i",
            status: "running"
          },
          {
            recid: 1,
            id: "i-0e20d8028222e39f6",
            name: "tf-stage-website-stage5-ecscluster-i",
            status: "running"
          }
        ]);

      }.bind(this)
    );
  }
}
