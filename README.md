A Dockerfile providing the setup for running the [better-ajv-errors](https://github.com/atlassian/better-ajv-errors) JSON validator.

## How to run?

### Prepare files

Move your instance and schema JSON files to ./json.

```
$ mkdir json
$ mv [files] json
```

### Build

```
$ docker build -t [image_name] . 
```

### Launch interactive shell

```
$ docker run -it [image_name] bash
```

### Run validator
```
# node validate.js schema_file instance_file
```

#### Example
```
# node validate.js json/schema.json json/valid.json
# node validate.js json/schema.json json/invalid.json
REQUIRED must have required property 'longitude'

> 1 | {"latitude":48.9,"lognitude":2.2}
    | ^ ☹️  longitude is missing here!
```

