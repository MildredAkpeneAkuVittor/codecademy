select * from startups;

Select Count * from startups;

select sum(valuation) from startups;

select max(raised)from startups where stage='Seed';

Select  min(founded) from startups;

Select AVG(valuation) from startups;

Select category, Round(AVG(valuation),2) from startups group by category order by 2 DESC;

Select category, count(*) from startups group by category having count(*)>3;

Select location, AVG(employees) from startups group by location having AVG(employees)>500;