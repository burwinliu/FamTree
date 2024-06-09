# Data
This is where all the data for the website will be stored.

## How to create a new line
Per family tree, create a new JSON file in this folder. The structure will be as follows:
```
{
    "name": "??? Line",
    "family": [
        {
            "id": 0,
            "name": "NAME",
            "start_series": 0,
            "end_series": 2,
            "description": "description",
            "details": "Optional Additional details",
            "little_ids": [1],
            "psudo_ids": [2]
        }
    ]
}
```
### Details of note
* The name of the json file will determine the img folder (i.e., a.json -> img/a/* will contain contents).
* Each line should have an image named "family_shot.png"
* Each member should have an image associated with them labeled with their ID number (0.png, etc.)

## How to update
1. Find the targetted family's JSON
2. Add to the family's "family" header with the following format:
```
{
    "id": 0,
    "name": "NAME",
    "start_series": 0,
    "end_series": 2,
    "description": "description",
    "details": "Optional Additional details",
    "little_ids": [1],
    "psudo_ids": [2]
}
```
3. Update your family's next ID for future refernce
4. Add member images if desired (make resolution ?)

CROISSANT LINE NEXT ID: 3

## Justification
Why do it like this?
1. Because we're cheapskates.
2. This data site is only a readonly, with low data amount 

NOTE: It is definitely not best practice, but for the sake of this use case, it is acceptable