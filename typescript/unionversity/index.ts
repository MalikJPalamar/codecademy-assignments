import courses from './courses'
import studyGroups from './studyGroups'

type Course = {
  id: number;
  studyGroupId: number;
  title: string;
  keywords: string[];
  eventType: string;
}

type StudyGroup = {
  id: number;
  courseId: number;
  title: string;
  keywords: string[];
  eventType: string;
}

type SearchEventsOptions = {
  query: string | number
  eventType: 'courses' | 'groups'
}

function searchEvents(options: SearchEventsOptions): (Course | StudyGroup)[] {
  let events;
  if (options.eventType === 'courses') {
    events = courses;
  } else {
    events = studyGroups;
  }
  return events.filter((event: Course | StudyGroup) => {
    if (typeof options.query === 'number') {
      return event.id === options.query;
    }
    if (typeof options.query === 'string') {
      return event.keywords.includes(options.query);
    }
    return false;
  });
}

let searchResults = searchEvents({ query: 'history', eventType: 'courses'})
console.log(searchResults)

let enrolledEvents: (Course | StudyGroup)[] = [];

function enroll(event: Course | StudyGroup){
  enrolledEvents.push(event)
}
enroll(searchEvents({query: 'art', eventType: 'courses'})[1])
console.log(enrolledEvents)
