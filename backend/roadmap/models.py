import mongoengine as me
from datetime import datetime


class DailyTask(me.EmbeddedDocument):
    day = me.IntField(required=True)
    topic = me.StringField()
    description = me.StringField()
    video = me.StringField()
    hands_on = me.StringField()
    assignment = me.StringField()
    study_material = me.DictField()
    quiz = me.DictField()


class WeeklyPlan(me.EmbeddedDocument):
    week = me.IntField()
    topics = me.StringField()
    goals = me.StringField()
    daily_tasks = me.EmbeddedDocumentListField(DailyTask)


class Roadmap(me.Document):
    title = me.StringField(required=True)
    duration_weeks = me.IntField()
    level = me.StringField()
    language = me.StringField()
    total_hours_per_day = me.IntField()
    overview = me.StringField()
    created_by = me.StringField()
    created_at = me.DateTimeField(default=datetime.utcnow)
    weekly_plans = me.EmbeddedDocumentListField(WeeklyPlan)
