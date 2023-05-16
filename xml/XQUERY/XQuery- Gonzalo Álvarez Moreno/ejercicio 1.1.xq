for $book in doc("ejercicio1.xml")/bib/book
order by xs:decimal($book/price) descending
return $book/title
