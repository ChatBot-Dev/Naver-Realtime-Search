import requests, json
from bs4 import BeautifulSoup

html = requests.get("https://datalab.naver.com/keyword/realtimeList.naver", headers = {
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko)\
                    Chrome/75.0.3770.100 Safari/537.36'
}).content.decode("utf-8")
contents = BeautifulSoup(html, "html.parser").select("span.item_title")

element = []
for elem in contents:
    element.append(elem.text)

print(element)
