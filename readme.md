### Nested Json object edit and delete

**Config**

> Default children key is "children". You can change name of key for your json object.

```
_JSON_CHILD_KEY = "your_json_child_key";

```

**Editing**

```
your_json_obj.editJson(your_edited_json_obj, { your_uniqe_key: your_uniqe_value });

```

**Deleting**

```
your_json_obj.deleteJson(will_be_deleted_obj);

```

---

**Example**

```
let jsonObj = [
    {
        uid: "abm_54ok7js96ku",
        name: "Home",
        path: "/",
        type: "Link",
        children: [],
    },
    {
        uid: "abm_27d2jh728ns",
        name: "Products",
        path: "/products",
        type: "Link",
        children: [
            {
                uid: "abm_aknsanmoq223",
                name: "Standart",
                path: "/products/standart",
                type: "Link",
                children: [
                    {
                        uid: "abm_cnhs29834hdbs",
                        name: "Standart Double",
                        path: "/products/standart/double",
                        type: "Link",
                        children: [],
                    },
                    {
                        uid: "abm_vnei73whsb2h2x",
                        name: "Standart Triple",
                        path: "/products/standart/triple",
                        type: "Link",
                        children: [
                            {
                                uid: "abm_85ruijr88rj",
                                name: "Elastic",
                                path: "/products/standart/triple/elastic",
                                type: "Link",
                                children: [],
                            },
                        ],
                    },
                ],
            },
            {
                uid: "abm_376hdsjashgsy3",
                name: "Twin",
                path: "/products/twin",
                type: "Link",
                children: [],
            },
        ],
    },
    {
        uid: "abm_405djn22jis",
        name: "Contact",
        path: "/contact",
        type: "Link",
        children: [],
    },
];

```

---

**Editing Example**

```
{
    uid: "abm_85ruijr88rj",
    name: "Elastic",
    path: "/products/standart/triple/elastic",
    type: "Link",
    children: [],
}
```

I have many product and i want to change name of elastic.

```
let EDITED_DATA = {
    uid: "abm_85ruijr88rj",
    name: "Renamed of Flexible",
    path: "/products/standart/triple/flexible",
    type: "Link",
    children: [],
};

let json = jsonObj.editJson(EDITED_DATA, { uid: EDITED_DATA.uid });
json.then((res) => {
    console.log(res);
});
```

---

**Deleting Example**

```
let WILL_BE_DELETED_DATA = {
    uid: "abm_85ruijr88rj",
    name: "Elastic",
    path: "/products/standart/triple/elastic",
    type: "Link",
    children: [],
}
```

```
let json = jsonObj.deleteJson(WILL_BE_DELETED_DATA);
json.then((res) => {
    console.log(res);
});
```

---

**Full Example**

```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <script src="/jsonArea.js"></script>
        <script>
            _JSON_CHILD_KEY = "children";

            let jsonObj = [
                {
                    uid: "abm_54ok7js96ku",
                    name: "Home",
                    path: "/",
                    type: "Link",
                    children: [],
                },
                {
                    uid: "abm_27d2jh728ns",
                    name: "Products",
                    path: "/products",
                    type: "Link",
                    children: [
                        {
                            uid: "abm_aknsanmoq223",
                            name: "Standart",
                            path: "/products/standart",
                            type: "Link",
                            children: [
                                {
                                    uid: "abm_cnhs29834hdbs",
                                    name: "Standart Double",
                                    path: "/products/standart/double",
                                    type: "Link",
                                    children: [],
                                },
                                {
                                    uid: "abm_vnei73whsb2h2x",
                                    name: "Standart Triple",
                                    path: "/products/standart/triple",
                                    type: "Link",
                                    children: [
                                        {
                                            uid: "abm_85ruijr88rj",
                                            name: "Elastic",
                                            path: "/products/standart/triple/elastic",
                                            type: "Link",
                                            children: [],
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            uid: "abm_376hdsjashgsy3",
                            name: "Twin",
                            path: "/products/twin",
                            type: "Link",
                            children: [],
                        },
                    ],
                },
                {
                    uid: "abm_405djn22jis",
                    name: "Contact",
                    path: "/contact",
                    type: "Link",
                    children: [],
                },
            ];

            let EDITED_DATA = {
                uid: "abm_85ruijr88rj",
                name: "Renamed of Flexible",
                path: "/products/standart/triple/flexible",
                type: "Link",
                children: [],
            };

            let json1 = jsonObj.editJson(EDITED_DATA, { uid: EDITED_DATA.uid });
            json1.then((res) => {
                console.log(res);
            });
        </script>
    </body>
</html>

```
