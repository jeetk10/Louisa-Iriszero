import textrazor
textrazor.api_key = "3954483c7ed591de1dde3d2f9d17b3d7427f0cf75411dbeaf327b170"

client = textrazor.TextRazor(extractors=["entities", "topics"])

client.set_cleanup_mode("cleanHTML")

client.set_classifiers(["textrazor_newscodes"])

response = client.analyze_url("https://www.cityam.com/a-big-tech-style-restructure-in-whitehall-might-just-make-our-science-sector/")

entities = list(response.entities())
entities.sort(key=lambda x: x.relevance_score, reverse=True)
seen = set()

for entity in entities:
    if entity.id not in seen:
        print(entity.id)
        seen.add(entity.id)

print()
print()

for topic in response.topics():
 	if topic.score > 0.3:
 		print(topic.label)

print()
print()

for category in response.categories():
    print(category.label)